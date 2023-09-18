import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";
import "dotenv/config";

export const env = createEnv({
  clientPrefix: "",
  runtimeEnv: process.env,
  client: {
    TEST: z.string(),
  },
});
