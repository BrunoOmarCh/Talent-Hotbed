import Card from "./components/Card";

export default function CarrerasPage() {
  const careers = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500",
      name: "Ingeniería de Software",
      shortDescription:
        "Carrera enfocada en el diseño, desarrollo y mantenimiento de sistemas de software. Abarca programación, arquitectura de software, bases de datos y metodologías ágiles.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500",
      name: "Medicina Humana",
      shortDescription:
        "Formación integral en ciencias de la salud para diagnosticar, tratar y prevenir enfermedades. Combina conocimientos científicos con habilidades humanísticas y éticas.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500",
      name: "Administración de Empresas",
      shortDescription:
        "Carrera que prepara profesionales para gestionar organizaciones, planificar estrategias empresariales, liderar equipos y tomar decisiones en el ámbito corporativo.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500",
      name: "Arquitectura",
      shortDescription:
        "Combina creatividad, diseño y técnica para planificar y construir espacios funcionales y estéticos. Incluye urbanismo, diseño sostenible y patrimonio cultural.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500",
      name: "Psicología",
      shortDescription:
        "Estudio científico del comportamiento humano y los procesos mentales. Abarca psicología clínica, organizacional, educativa y neuropsicología.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=500",
      name: "Derecho",
      shortDescription:
        "Formación en ciencias jurídicas, leyes y normativas. Prepara abogados para defender derechos, asesorar legalmente y ejercer la justicia en diversos ámbitos.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500",
      name: "Ingeniería Industrial",
      shortDescription:
        "Optimización de procesos, gestión de operaciones y mejora de la productividad. Integra conocimientos de ingeniería, administración y sistemas.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1596496050827-8299e0220de1?w=500",
      name: "Contabilidad",
      shortDescription:
        "Manejo de información financiera, auditoría y tributación. Profesionales expertos en análisis contable, control de costos y cumplimiento normativo.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=500",
      name: "Marketing",
      shortDescription:
        "Estrategias para promocionar productos y servicios, análisis de mercado, branding digital y gestión de experiencias del cliente en la era digital.",
    },
  ];
  return (
    <div className="h-full overflow-scroll no-scrollbar">
      <div className="py-10 text-center">
        <h2
          className="font-sf font-semibold leading-[0.8] md:m-0 m-auto
            text-[40px] md:text-[40px] lg:text-[60px]"
        >
          <span className="">Carreras</span>&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A629FF] to-[#1DD1CB]">
            profesionales
          </span>
        </h2>
        <p className="py-10">
          Estas son las carreras profesionales que se ajustan a tu perfil
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12 text-center flex-wrap">
        {careers.map((career, index) => {
          return <Card key={index} {...career} />;
        })}
      </div>
    </div>
  );
}
