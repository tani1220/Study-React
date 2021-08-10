import Head from "next/head";
import { Header } from "src/components/Header";
import { Users } from "src/components/Users";

const UserPage = () => {
  return (
    <div>
      <Head>
        <title>User page</title>
      </Head>
      <Header />

      <Users />
    </div>
  );
};

export default UserPage;
