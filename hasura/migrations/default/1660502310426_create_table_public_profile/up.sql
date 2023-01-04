CREATE TABLE "public"."profile" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), PRIMARY KEY ("id") , UNIQUE ("id"));COMMENT ON TABLE "public"."profile" IS E'Profile';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
