import { siteConfig } from "@/lib/site-config";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Portrait } from "./portrait";
import { Reveal } from "./reveal";

const areaName = Object.fromEntries(siteConfig.practiceAreas.map((a) => [a.id, a.name]));

export function Lawyers() {
  const lawyers = siteConfig.lawyers;

  return (
    <section
      id="advogados"
      aria-labelledby="advogados-title"
      className="bg-paper px-5 py-20 sm:px-10 lg:px-16 lg:py-28 xl:px-24"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-bronze-ink">Advogados</p>
          <h2 id="advogados-title" className="mt-4 text-[2.25rem] text-ink sm:text-5xl">
            Quem atende você
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <Tabs defaultValue={lawyers[0].id}>
            <TabsList aria-label="Escolha o advogado">
              {lawyers.map((lawyer) => (
                <TabsTrigger key={lawyer.id} value={lawyer.id}>
                  {lawyer.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {lawyers.map((lawyer) => (
              <TabsContent key={lawyer.id} value={lawyer.id}>
                <article className="grid items-start gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-14">
                  <Portrait
                    name={lawyer.name}
                    initials={lawyer.initials}
                    photo={lawyer.photo}
                    sizes="(min-width: 768px) 320px, 80vw"
                    className="mx-auto w-full max-w-xs md:max-w-none"
                  />

                  <div>
                    <h3 className="text-[2rem] text-ink sm:text-[2.5rem]">{lawyer.name}</h3>
                    {/* TODO: preencher a OAB do Dr. Rubens em lib/site-config.ts */}
                    {lawyer.oab && (
                      <p className="mt-2 text-sm font-semibold tracking-[0.14em] text-bronze-ink uppercase">
                        {lawyer.oab}
                      </p>
                    )}

                    <div className="mt-6 space-y-4 text-[1.0625rem] leading-relaxed text-muted-ink">
                      {lawyer.bio.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>

                    {lawyer.areas.length > 0 && (
                      <div className="mt-8">
                        <h4 className="text-sm font-semibold tracking-[0.12em] text-ink uppercase">Áreas de atuação</h4>
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {lawyer.areas.map((id) => (
                            <li
                              key={id}
                              className="rounded-full border border-bronze/50 px-3.5 py-1 text-sm text-ink"
                            >
                              {areaName[id]}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </article>
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}
