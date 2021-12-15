import IntroSection from "../../../common/IntroSection/IntroSection";
import { routes } from "../../../../services/routes";
import ProjectBody from "../ProjectBody/ProjectBody";

const ProjectPage = () => {
  return (
    <div data-testid="ProjectPage">
      <IntroSection
        title="IL PROGETTO"
        subtitle="Il catalogo nazionale della sematica dei dati"
        description="Ricerca e riuso di asset semantici, tra cui ontologie, schemi dati e vocabolari controllati per supportare lo sviluppo di API semanticamente e sintatticamente interoperabili"
        primaryButtonText="Vai alle domande frequenti"
        primaryButtonLink={routes.faq()}
        secondaryButtonText="Esplora il catalogo"
        secondaryButtonLink={routes.explore()}
      />
      <ProjectBody />
      <IntroSection
        title="CONTRIBUISCI"
        subtitle="Scopri come contribuire"
        primaryButtonText="Vai alle Linee Guida"
        primaryButtonLink={routes.explore()}
      />
    </div>
  );
};

ProjectPage.propTypes = {};
ProjectPage.defaultPropTypes = {};

export default ProjectPage;