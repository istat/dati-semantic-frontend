import React, { useEffect } from "react";
import FaqBody from "../FaqBody/FaqBody";
import IntroSection from "../../../common/IntroSection/IntroSection";
import { routes } from "../../../../services/routes";
import BREADCRUMBS from "../../../../services/BreadCrumbsConst";
import EndSection from "../../../common/EndSection/EndSection";

const FaqPage = () => {
  useEffect(() => {
    document.title = "FAQ - Catalogo Nazionale Dati";
  });

  return (
    <div data-testid="FaqPage">
      <IntroSection
        title="Hai bisogno di chiarimenti o supporto?"
        subtitle="Consulta le le domande frequenti"
        primaryButtonText="Scopri il progetto"
        primaryButtonLink={routes.project()}
        secondaryButtonText="Esplora il catalogo"
        secondaryButtonLink={routes.explore()}
        type="HEADER"
        arrayBread={BREADCRUMBS.FAQPAGE}
      />
      <FaqBody />
      <EndSection type={2} />
    </div>
  );
};

FaqPage.propTypes = {};

FaqPage.defaultProps = {};

export default FaqPage;
