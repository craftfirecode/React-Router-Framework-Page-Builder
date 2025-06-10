import { getBlogData } from "~/api/strapi-api";
import type { Route } from "./+types/blog.$id";
import { Builder } from "~/components/ui/builder";

export async function loader({ params }: Route.LoaderArgs) {
  try {
    const data = await getBlogData(params.id);
    return data[0];
  } catch (error) {
    return { data: null };
  }
}

export function meta({ data }: Route.MetaArgs & { data: any }) {
  if (!data?.settings) return [];
  return [
    { title: `CRAFTFIRE - ${data.settings.title}` },
    { description: data.settings.description },
  ];
}

export default function PostIndex({ loaderData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto mt-5">
      <Builder data={loaderData} />
    </div>
  );
}
