import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { ImageUpload } from '@/ui/components/ImageUpload';
import { LoginForm } from '@/ui/components/LoginForm';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <LoginForm />
      <ImageUpload />
    </Main>
  );
};

export default Index;
