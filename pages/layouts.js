import Layout from "../components/MyLayout";

const Page = () => (
    <p>
        Different <b>Layout</b> Methods
    </p>
);

// export default Layout(Page);

// export default () => <Layout page={Page} />;

export default () => <Layout content={Page} />;
