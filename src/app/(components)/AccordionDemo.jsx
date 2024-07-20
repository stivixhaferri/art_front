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
          Pas hyrjes në sistem, do të shihni dy mundësi të reja në shiritin e sipërm: Post Your Car dhe My Cars
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="lg:text-[25px]">Si të postoj makinën time për qira?</AccordionTrigger>
        <AccordionContent className="lg:text-[18px]">
          Klikoni në mundësinë &quot;Posto Your Car&quot; në shiritin e sipërm. Do të udhëzoheni në një formë ku mund të jepni detaje mbi makinën tuaj, përfshirë markën, modelin, vitin dhe informacione të tjera të rëndësishme. Pas dorëzimit, makina juaj do të listohen dhe do të jetë e disponueshme për t&apos;u parë dhe rezervuar nga të tjerët.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="lg:text-[25px]">Çfarë është seksioni &quot;My Cars&quot;?</AccordionTrigger>
        <AccordionContent className="lg:text-[18px]">
          Seksioni &quot;My Cars&quot; ju lejon të menaxhoni makinat që keni postuar. Mund të shihni një listë të të gjitha makinave tuaja, të shihni detajet e tyre dhe të përditësoni disponueshmërinë e tyre.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="lg:text-[25px]">Si kryhet pagesa për mjetet e dhëna me qira?</AccordionTrigger>
        <AccordionContent className="lg:text-[18px]">
          Pasi klienti kryen rezervimin për një nga makinat tuaja, ju do të merrni një email ku do të keni të dhënat e klientit, datën e marrjes së makinës, datën e kthimit të makinës, emailin e klientit, numrin e klientit dhe totalin në euro i cili llogaritet nga kohëzgjatja e marrjes së makinës me qira.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="lg:text-[25px]">Kush mund të shohë listat e makinave të mia?</AccordionTrigger>
        <AccordionContent className="lg:text-[18px]">
          Listat e makinave tuaja janë të dukshme për të gjithë përdoruesit në platformë që janë duke kërkuar për të marrë një makinë me qira. Sigurohuni që detajet e makinës tuaj janë të sakta dhe tërheqëse për të tërhequr potencialë të prenotuesve.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger className="lg:text-[25px]">Çfarë duhet të bëj nëse has ndonjë problem me platformën?</AccordionTrigger>
        <AccordionContent className="lg:text-[18px]">
          Nëse hasni ndonjë problem, ju lutemi kontaktoni ekipin tonë të mbështetjes përmes seksionit &quot;Ndihmë&quot; ose &quot;Kontaktoni Na&quot; në faqen e internetit. Jepni sa më shumë detaje të mundshme për të na ndihmuar që t&apos;ju asistojmë sa më shpejt.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
