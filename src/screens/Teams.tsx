import SectionTitle from "@/components/SectionTitle";
import { TeamsData } from "@/constants";

const Teams = () => {
  return (
    <section className="mt-20">
      <SectionTitle>Team</SectionTitle>
      <div className="max-w-4xl grid grid-cols-3 gap-5 mx-auto mt-[40px]">
        {TeamsData.map((member) => (
          <div key={member.id} className="bg-white rounded-xl shadow-md p-4">
            <div className="h-32 w-32 rounded-full mx-auto border overflow-hidden">
              <img
                className="size-full object-cover"
                src={member.picture}
                alt={member.name}
              />
            </div>

            <h2 className="text-lg font-semibold text-center mt-2">
              {member.name}
            </h2>
            <p className="text-center text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teams;
