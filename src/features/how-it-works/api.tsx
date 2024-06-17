import { CheckCircledIcon } from "@radix-ui/react-icons";

import Link from "next/link";

export const howItWorksItems = [
  {
    icon: <CheckCircledIcon style={{ marginTop: "4px" }} color="green" />,
    text: (
      <>
        Du ringer till UC automatiska telefontjänst, öppen dygnet runt, och
        anmäler borttappad eller stulen ID-handling. <br />
        <strong>Samtalet kostar 95 kr</strong>, vilket dras på din
        telefonräkning.
      </>
    ),
  },
  {
    icon: <CheckCircledIcon style={{ marginTop: "4px" }} color="green" />,
    text: (
      <>
        Vi lägger in en notering om förlorad ID-handling i din{" "}
        <Link href="/min-upplysning">kreditupplysning</Link>. Notering om
        förlorad ID-handling ligger kvar i två år.
      </>
    ),
  },
  {
    icon: <CheckCircledIcon style={{ marginTop: "4px" }} color="green" />,
    text: "När ett företag tar en kreditupplysning från UC på dig ser de att du förlorat din ID-handling. På så sätt kan företaget upptäcka om personen som använder din ID-handling försöker missbruka den.",
  },
];

export const faqItems = [
  {
    question: "Hur legitimerar jag mig efter anmälan?",
    answer: "Du kan legitimera dig med annan eller ny legitimation.",
  },
  {
    question: "Kan jag återkalla spärren?",
    answer:
      "Du kan närsomhelst återkalla uppgifterna om du tex själv hittar din ID-handling. Vill du häva din spärr använder du den blankett du fick skickad till dig när spärren aktiverades.",
  },
  {
    question: "Behöver jag även förlustanmäla hos polisen?",
    answer:
      "Pass och andra ID-handlingar bör även förlustanmälas hos Polisen för att det ska spärras som resehandling.",
  },
];
