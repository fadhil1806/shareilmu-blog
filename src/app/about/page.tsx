import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `
# About Me

Hai, Saya Muiz Ghifari. Saya seorang guru Matematika yang memiliki hobby menulis. Perjalanan saya menjadi seorang pengajar dimulai dari tahun 2016 hingga saat ini. Penelitian saya kepada pengembangan pembelajaran matematika yang mengedepankan konsep dan kontruktivisme.

Blog ini akan menjadi tempat berbagi perspektif yang menyenangkan, dokumentasi perjalanan kehidupan, berbagi pengalaman yang semoga saja dapat menjadi inspirasi pembaca.

Jika kalian mau memberikan saran ataupun pertanyaan seputar riset/konsultasi skripsi, tesis, dan pembuatan artikel ilmiah di jurusan Pendidikan Matematika, tentunya dengan biaya mahasiswa.

## Kontak

- **Instagram**: [@ghifarimuiz](https://instagram.com/ghifarimuiz)  
- **LinkedIn**: [Muiz Ghifari](https://www.linkedin.com/in/muiz-ghifari-5abb33146/)  
- **Email**: [muizghifari47@gmail.com](mailto:muizghifari47@gmail.com)
`;

export async function generateMetadata() {
  return {
    title: "About Me",
    description: "Learn more about Samantha and her travel adventures",
    openGraph: {
      title: "About Me",
      description: "Learn more about Samantha and her travel adventures",
      images: [
        signOgImageUrl({
          title: "Samantha",
          label: "About Me",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
