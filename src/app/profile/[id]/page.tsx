export default async function UserProfile({ params }: any) {
  const { id } = await params;
  return (
    <div className="flex justify-center items-center h-screen bg-slate-900 text-white text-4xl">
      Profile:
      <span className="bg-orange-500 rounded p-2 ml-2 text-black ">
        {params.id}
      </span>
    </div>
  );
}
