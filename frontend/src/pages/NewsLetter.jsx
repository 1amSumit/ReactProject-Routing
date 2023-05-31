import NewsletterSignup from "../components/NewsletterSignup";
import PageContent from "./PageContent";

const NewsLetter = () => {
  return (
    <PageContent title="Join our awesome newsletter!">
      <NewsletterSignup />
    </PageContent>
  );
};

export default NewsLetter;

export async function action({ request }) {
  const data = await request.formData();
  const email = data.get("email");

  // send to backend newsletter server ...
  console.log(email);
  return { message: "Signup successful!" };
}
