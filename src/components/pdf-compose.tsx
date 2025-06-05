import { Document, Font, Link, Page, PDFDownloadLink, PDFViewer, Text, View } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";

const tw = createTw({})

Font.register({
  family: "Roboto Condensed",
  fonts: [
    { src: "/assets/fonts/RobotoCondensed-Regular.ttf", fontWeight: "normal" },
    { src: "/assets/fonts/RobotoCondensed-Italic.ttf", fontStyle: 'italic' },
    { src: "/assets/fonts/RobotoCondensed-SemiBold.ttf", fontWeight: 400 },
    { src: "/assets/fonts/RobotoCondensed-Bold.ttf", fontWeight: "bold" }
  ]
});

export function PDFCompose() {
  return (
    <Document style={{ fontFamily: 'Roboto Condensed' }}>
      <Page style={[tw("p-8 text-sm text-gray-900 text-pretty"), { fontSize: 12 }]}>
        <View style={tw('flex items-center justify-center')}>
          <Text style={tw("text-3xl font-bold uppercase")}>Gabriel Januario Duarte de Souza</Text>
        </View>

        <View style={tw("mb-6")}>
          <Text style={tw('font-semibold text-xl mb-1')}>Software Developer Backend</Text>
          <View style={tw('flex flex-row gap-2')}>
            <Link style={tw('text-blue-600 underline')} href="https://wa.me/5531998990882">
              31 9 9899-0882
            </Link>
            <Text>|</Text>
            <Link style={tw('text-blue-600 underline')} href="mailto:jds.gabrielduarte@gmail.com">
              jds.gabrielduarte@gmail.com
            </Link>
          </View>
          <View style={tw('flex flex-row gap-2')}>
            <Link style={tw('text-blue-600 underline')} href="https://www.linkedin.com/in/jdsgabriel/">
              https://www.linkedin.com/in/jdsgabriel
            </Link>
            <Text>|</Text>
            <Link style={tw('text-blue-600 underline')} href="https://github.com/jdgabriel">
              https://github.com/jdgabriel
            </Link>
          </View>
        </View>

        <View style={tw("mb-4")}>
          <Text style={tw("text-base font-bold mb-1")}>RESUMO</Text>
          <Text>
            Desenvolvedor de software com experiência em Node.js, TypeScript e microsserviços. Atuação
            em automação, integração de sistemas e gestão de configurações. Domínio de NestJS,
            Express, GraphQL, AWS, Azure e CI/CD com GitHub Actions. Foco em escalabilidade,
            eficiência e qualidade, com entregas contínuas e melhorias de processo.
          </Text>
        </View>

        <View style={tw("border-b-2 h-0.5 w-full mb-4 border-zinc-200")}></View>

         <View style={tw("mb-4")}>
          <Text style={tw("text-base font-bold mb-1")}>HABILIDADES</Text>
          <View style={tw('pl-4 mt-2')}>
            <Text><Text style={tw('font-bold')}>• Linguagens:</Text> TypeScript | JavaScript</Text>
            <Text><Text style={tw('font-bold')}>• Backend Frameworks & Libs:</Text> Node.js | NestJS | Express | Fastify | GraphQL</Text>
            <Text><Text style={tw('font-bold')}>• Banco de dados:</Text> PostgreSQL | MySQL | MongoDB</Text>
            <Text><Text style={tw('font-bold')}>• Arquitetura & Infra:</Text> Microsserviços | Webhooks | RabbitMQ</Text>
            <Text><Text style={tw('font-bold')}>• Cloud & DevOps:</Text> AWS (EC2 - S3 - CloudFront) | Azure | Docker | GitHub Actions (CI/CD)</Text>
          </View>
        </View>

        <View style={tw("border-b-2 h-0.5 w-full mb-4 border-zinc-200")}></View>

        <View style={tw("mb-4")}>
          <Text style={tw("text-base font-bold mb-2")}>EXPERIÊNCIA</Text>

          <View style={tw('flex gap-4')}>
            <View style={tw('text-wrap')}>
              <Text style={tw("font-semibold")}>Backend Software Engineer - GlobalSys Soluções em TI</Text>
              <Text style={tw("italic")}>Agosto 2024 - Maio 2025</Text>
              <View style={tw('pl-4 mt-2 text-wrap')}>
                <Text>• Manutenção e criação de novas features em sistema de pós-venda para e-commerce e lojas físicas, atendendo 2k+ vendedores.</Text>
                <Text>• Arquitetura e desenvolvimento de app para centralizar comunicações, melhorando integração de webhooks e logs entre microsserviços.</Text>
                <Text>• Criação de arquitetura de sistema de gestão de configurações (backoffice), reduzindo a complexidade.</Text>
              </View>
            </View>

            <View style={tw('text-wrap')}>
              <Text style={tw("font-semibold mt-2")}>Full Stack Software Engineer - PSO Engenharia Elétrica</Text>
              <Text style={tw("italic")}>Março 2021 - Agosto 2024</Text>
                <View style={tw('pl-4 mt-2 text-wrap')}>
                  <Text>• Desenvolvi software para automatizar relatórios NR10, acelerando a entrega ao cliente.</Text>
                  <Text>• Liderei arquitetura e melhorias no sistema de monitoramento remoto (IoT), aumentando a estabilidade e eficiência.</Text>
                  <Text>• Criei sistema de gestão de tarefas com notificações, integrando com Google Agenda para alertas automáticos.</Text>
                  <Text>• Implantei pipeline de CI/CD com Github Action e Docker, aumentando em 80% a frequência de entregas de novas funcionalidades.</Text>
                </View>
            </View>

            <View style={tw('text-wrap')}>  
              <Text style={tw("font-semibold mt-2")}>Full Stack Software Engineer - Trocalike.com.br</Text>
              <Text style={tw("italic")}>Abril 2019 - Janeiro 2021</Text>
                <View style={tw('pl-4 mt-2 text-wrap')}>
                  <Text>• Implementei infraestrutura na AWS com EC2, S3 e CloudFront, garantindo escalabilidade e alta disponibilidade.</Text>
                  <Text>• Desenvolvi pipeline de CI/CD com Github Action e Docker, otimizando a entrega contínua para AWS S3.</Text>
                  <Text>• Arquitetei e mantive o banco de dados MongoDB, organizando dados com eficiência e consistência.</Text>
                  <Text>• Desenvolvimento fullstack do sistema, integrado com gateway de pagamento para automatizar transações.</Text>
                </View>
            </View>

          </View>
        </View>
      </Page>
    </Document>
  )
}

export function DownloadButton(){
  return (
      <PDFDownloadLink
        document={<PDFCompose />}
        fileName="Gabriel Duarte - Software Developer Backend.pdf"
        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 hover:cursor-pointer text-white no-underline rounded-lg font-sans font-medium"
      >
       😁 Baixe meu currículo agora!
      </PDFDownloadLink>
  )
}

export function CurriculoGabriel(){
  return (
    <PDFViewer showToolbar={false} style={tw('h-screen w-screen')}>
      <PDFCompose/>
    </PDFViewer>
  )
};
