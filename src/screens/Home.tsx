import SectionTitle from "@/components/SectionTitle";
import UserProfile from "@/components/UserProfile";
import { useAppContext } from "@/hooks/useAppContext";
import { User } from "@/types";

const Home = () => {
  const { users } = useAppContext();
  console.log(users);
  const fetchedUsers = users?.results || [];
  return (
    <section>
      <SectionTitle>Users</SectionTitle>
      <div className="grid grid-cols-3 gap-5">
        {fetchedUsers && fetchedUsers.length > 0 ? (
          fetchedUsers.map((user: User, index: number) => (
            <div key={index} className="mb-4">
              <UserProfile data={user} />
            </div>
          ))
        ) : (
          <p>No users available</p>
        )}
      </div>
    </section>
  );
};

export default Home;
