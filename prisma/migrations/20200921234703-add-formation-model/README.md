# Migration `20200921234703-add-formation-model`

This migration has been generated by mouadmaa at 9/22/2020, 12:47:03 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE UNIQUE INDEX "Formation.name_unique" ON "public"."Formation"("name")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200921215201-add-formation-model..20200921234703-add-formation-model
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -20,9 +20,9 @@
 }
 model Formation {
   id        String   @id @default(cuid())
-  name      String
+  name      String   @unique
   descUrl   String
   level     Level
 }
```

