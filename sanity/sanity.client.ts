import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "yx86khcg",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: false,
};

const client = createClient(config);

export default client;