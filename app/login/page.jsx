import { getProviders, signIn, useSession } from "next-auth/react";

const Login = ({ providers }) => {
  console.log("Log", providers?.name);
  return (
    <div>
      <img className="w-52 mb-5" src="https://links.papareact.com/9xl" alt="" />
    </div>
  );
};

export default Login;

export async function Page(req, res) {
  const providers = await getProviders();
  console.log("providers", providers);
  return {
    props: {
      providers,
    },
  };
}
