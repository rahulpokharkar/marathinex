import assert from "node:assert/strict";
import { mkdtemp, rm } from "node:fs/promises";
import { createRequire } from "node:module";
import os from "node:os";
import path from "node:path";
import ts from "typescript";

const projectRoot = path.resolve(import.meta.dirname, "..");
const outputDirectory = await mkdtemp(
  path.join(os.tmpdir(), "marathinex-marketplace-demo-"),
);
const originalNodeEnvironment = process.env.NODE_ENV;

try {
  const entryPoint = path.join(
    projectRoot,
    "lib/marketplace/demo/index.ts",
  );
  const program = ts.createProgram([entryPoint], {
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.CommonJS,
    moduleResolution: ts.ModuleResolutionKind.Node10,
    strict: true,
    skipLibCheck: true,
    esModuleInterop: true,
    rootDir: projectRoot,
    outDir: outputDirectory,
    noEmitOnError: true,
  });
  const diagnostics = ts.getPreEmitDiagnostics(program);
  if (diagnostics.length > 0) {
    throw new Error(
      ts.formatDiagnosticsWithColorAndContext(diagnostics, {
        getCurrentDirectory: () => projectRoot,
        getCanonicalFileName: (fileName) => fileName,
        getNewLine: () => "\n",
      }),
    );
  }

  const emitResult = program.emit();
  assert.equal(emitResult.emitSkipped, false, "TypeScript compilation must emit");

  process.env.NODE_ENV = "production";
  const require = createRequire(import.meta.url);
  const marketplace = require(
    path.join(outputDirectory, "lib/marketplace/demo/index.js"),
  );
  const {
    demoProfiles,
    filterProfiles,
    getAllProfiles,
    getFeaturedProfiles,
    getProfileBySlug,
    getProfilesByRole,
    searchProfiles,
    validateDemoData,
  } = marketplace;
  const { professionalRoles } = require(
    path.join(outputDirectory, "lib/marketplace/roles.js"),
  );
  const profiles = getAllProfiles();

  assert.deepEqual(validateDemoData(), []);
  assert.equal(profiles.length, 30);
  assert.equal(new Set(profiles.map((profile) => profile.id)).size, 30);
  assert.equal(new Set(profiles.map((profile) => profile.slug)).size, 30);
  assert.ok(profiles.every((profile) => profile.demo === true));
  assert.ok(profiles.every((profile) => profile.verified === false));
  assert.equal(demoProfiles.length, 30);

  for (const role of professionalRoles) {
    assert.equal(
      profiles.filter((profile) => profile.primaryRole === role.code).length,
      2,
      `two primary profiles for ${role.label}`,
    );
  }

  const actorProfiles = getProfilesByRole("actor");
  assert.equal(actorProfiles.length, 2);
  assert.equal(actorProfiles.filter((profile) => profile.gender === "male").length, 1);
  assert.equal(actorProfiles.filter((profile) => profile.gender === "female").length, 1);
  assert.equal(getProfileBySlug(profiles[0].slug)?.id, profiles[0].id);
  assert.equal(searchProfiles("Aarav Ketkar").length, 1);
  assert.ok(searchProfiles(profiles, { city: "Pune" }).length > 0);

  const multiRoleResults = filterProfiles({ roles: ["director", "writer"] });
  assert.equal(multiRoleResults.length, 4);
  assert.ok(multiRoleResults.some((profile) => profile.displayName === "Rohan Velankar"));
  assert.deepEqual(
    filterProfiles({
      primaryRole: "cinematographer",
      format: "documentary",
    }).map((profile) => profile.displayName),
    ["Aditi Dandekar"],
  );

  const featuredProfiles = getFeaturedProfiles();
  assert.equal(featuredProfiles.length, 6);
  assert.ok(featuredProfiles.every((profile) => profile.featured));

  console.log("PASS: 30 profiles, unique IDs/slugs, demo and unverified flags");
  console.log("PASS: two profiles per primary role and actor gender coverage");
  console.log("PASS: required profile fields and valid role/format codes");
  console.log("PASS: slug lookup, role lookup, search, filters, multi-role, featured");
  console.log("PROFILE COUNTS:");
  for (const role of professionalRoles) {
    console.log(
      `  ${role.label}: ${profiles.filter((profile) => profile.primaryRole === role.code).length}`,
    );
  }
} finally {
  if (originalNodeEnvironment === undefined) {
    delete process.env.NODE_ENV;
  } else {
    process.env.NODE_ENV = originalNodeEnvironment;
  }
  await rm(outputDirectory, { recursive: true, force: true });
}
