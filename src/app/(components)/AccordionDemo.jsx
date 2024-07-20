import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="lg:text-[25px]">Çfarë duhet të bëj pas hyrjes në sistem?</AccordionTrigger>
          <AccordionContent className="lg:text-[18px]">
          Pas hyrjes në sistem, do të shihni dy mundësi të reja në shiritin e sipërm: "Post Your CAr" dhe "My Cars"
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="lg:text-[25px]">Si të postoj makinën time për qira?</AccordionTrigger>
          <AccordionContent className="lg:text-[18px]">
            Klikoni në mundësinë "Posto Your Car" në shiritin e sipërm. Do të udhëzoheni në një formë ku mund të jepni detaje mbi makinën tuaj, përfshirë markën, modelin, vitin dhe informacione të tjera të rëndësishme. Pas dorëzimit, makina juaj do të listohen dhe do të jetë e disponueshme për t'u parë dhe rezervuar nga të tjerët.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="lg:text-[25px]">Çfarë është seksioni "My Cars"?</AccordionTrigger>
          <AccordionContent className="lg:text-[18px]">
          Seksioni "My Cars" ju lejon të menaxhoni makinat që keni postuar. Mund të shihni një listë të të gjitha makinave tuaja, të shihni detajet e tyre dhe të përditësoni disponueshmërinë e tyre.
          </AccordionContent>
        </AccordionItem>


        <AccordionItem value="item-4">
          <AccordionTrigger className="lg:text-[25px]">Si kryhet pagesa per mjetet e dhena me qera?</AccordionTrigger>
          <AccordionContent className="lg:text-[18px]">
            Pasi klienti kryhen rezervimin per nje nga makinat tuaja, ju do te merni nje email ku do te keni te dhenat e klientit , daten e marjes se makines, daten e kthimit te makines ,emailin e klientit , numrin e klientit dhe totalin en euro i cili llogaritet nga kohezgjatja e marjes se makines me qera.
          </AccordionContent>
        </AccordionItem>



        <AccordionItem value="item-5">
          <AccordionTrigger className="lg:text-[25px]"> Kush mund të shohë listat e makinave të mia?</AccordionTrigger>
          <AccordionContent className="lg:text-[18px]">
          Listat e makinave tuaja janë të dukshme për të gjithë përdoruesit në platformë që janë duke kërkuar për të marrë një makinë me qira. Sigurohuni që detajet e makinës tuaj janë të sakta dhe tërheqëse për të tërhequr potencialë të prenotuesve.
          </AccordionContent>
        </AccordionItem>


        <AccordionItem value="item-6">
          <AccordionTrigger className="lg:text-[25px]">Çfarë duhet të bëj nëse has ndonjë problem me platformën?</AccordionTrigger>
          <AccordionContent className="lg:text-[18px]">
          Nëse hasni ndonjë problem, ju lutemi kontaktoni ekipin tonë të mbështetjes përmes seksionit "Ndihmë" ose "Kontaktoni Na" në faqen e internetit. Jepni sa më shumë detaje të mundshme për të na ndihmuar që të ju asistojmë sa më shpejt.
          </AccordionContent>
        </AccordionItem>






      </Accordion>
    )
  }
  