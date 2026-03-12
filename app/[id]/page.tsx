export async function generateMetadata({ params }: { params: { id: number } }) {
  const { id } = await params;

  return {
    title: "task " + id,
    description: "this is task " + id,
  };
}

export default async function page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  return (
    <div>
      page id
      {id}
    </div>
  );
}
