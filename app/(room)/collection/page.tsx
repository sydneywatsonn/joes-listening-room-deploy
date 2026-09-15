import { CollectionExperience } from "@/components/CollectionExperience";
import { getAllRecords } from "@/lib/records";

export default function CollectionPage() {
  const records = getAllRecords();

  return <CollectionExperience records={records} />;
}
