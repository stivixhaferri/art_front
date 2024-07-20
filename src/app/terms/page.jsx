import React from 'react';

const TermsAndConditionsPage = () => {
  return (
    <div className=" text-gray-800 lg:pt-[0%] pt-[15%]  font-sans">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Terms & Conditions</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Hyrje</h2>
            <p className="mb-4">
              Mirë se vini në faqen tonë të internetit. Duke aksesuar ose përdorur faqen tonë, pranoni të jeni të lidhur me këto kushte dhe kushtet dhe politikën tonë të privatësisë.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Përdorimi i Faqes së Internetit</h2>
            <p className="mb-4">
              Ju mund të përdorni faqen tonë vetëm për qëllime ligjore dhe në përputhje me këto kushte dhe kushte. Pranoni të mos përdorni faqen në një mënyrë që mund të dëmtojë, çaktivizojë, ngarkojë ose dëmtojë atë.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Pronësia Intelektuale</h2>
            <p className="mb-4">
              Të gjitha përmbajtjet në faqen e internetit, duke përfshirë tekstin, grafikët, logot dhe imazhet, janë pronë e kompanisë tonë dhe janë të mbrojtura nga ligjet për të drejtat e autorit dhe ligje të tjera për pronësinë intelektuale.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Përgjegjësitë e Shitësve të Automjeteve</h2>
            <p className="mb-4">
              Shitësit e automjeteve duhet të kontrollojnë rregullisht email-et e tyre për njoftimet nga faqja jonë, ART. Nëse një shitës nuk kontrollon email-et dhe humbet mundësinë për të pranuar një rezervim, përgjegjësia është e tij ose e saj.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Rezervimi i Automjeteve</h2>
            <p className="mb-4">
              Klientët do të paguajnë një tarifë fikse për rezervimin e një automjeti. Administratori do të dërgojë një email te shitësi me detajet e rezervimit, përfshirë çmimin, datën e marrjes dhe kthimin e automjetit, dhe informacionin e kontaktit të klientit. Shitësi mund të vendosë data që nuk janë të rezervueshme ose të bëjë automjetin jo të rezervueshëm për një periudhë të caktuar.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Kufizimi i Përgjegjësisë</h2>
            <p className="mb-4">
              Ne nuk do të jemi përgjegjës për dëme të drejtpërdrejta, të tërthorta, të rastësishme, speciale ose pasuese që lindin nga ose që kanë lidhje me përdorimin tuaj të faqes së internetit. Kjo përfshin çdo humbje të mundshme të të ardhurave ose ndonjë dëmtim tjetër që mund të ndodhë për shkak të përdorimit të faqes ose shërbimeve tona.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Ligji Rregullues</h2>
            <p className="mb-4">
              Këto kushte dhe kushte do të rregullohen dhe interpretohen në përputhje me ligjet e [juridiksioni juaj]. Çdo mosmarrëveshje që lind nga këto kushte do të zgjidhet në gjykatat e [juridiksioni juaj].
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Ndryshimet në Kushtet dhe Kushtet</h2>
            <p className="mb-4">
              Ne rezervojmë të drejtën për të modifikuar këto kushte dhe kushte në çdo kohë. Përdorimi juaj i vazhdueshëm i faqes pas çdo ndryshimi të tillë përbën pranimin tuaj të kushteve dhe kushteve të reja. Ju do të njoftoheni për çdo ndryshim të rëndësishëm në këto kushte.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Kontakti</h2>
            <p className="mb-4">
              Nëse keni ndonjë pyetje ose shqetësim në lidhje me këto kushte dhe kushte, ju lutemi na kontaktoni në [emaili ose informacioni juaj i kontaktit]. Ne do të përpiqemi të përgjigjemi në të gjitha kërkesat dhe pyetjet tuaja në një mënyrë të shpejtë dhe efikase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
