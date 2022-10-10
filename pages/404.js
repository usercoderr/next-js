import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFoundPage = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);
  return (
    <div className="not-found">
      <h1>Oups...</h1>
      <h2>This Page Could Not Be Found</h2>
      
      <p>
        I go to the
        <Link href="/">
          <a>Main Page</a>
        </Link>
        in a 2 seconds...
      </p>
    </div>
  );
};
export default NotFoundPage;
