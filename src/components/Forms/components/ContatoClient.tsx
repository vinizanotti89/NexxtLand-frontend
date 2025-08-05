"use client";

import { useState } from "react";
import FloatingFormModal from "./FloatingFormModal";
import InvestorForm from "./InvestorForm";
import BrokerForm from "./BrokerForm";
import { Button } from "@/components/Buttons/Button";

export default function ContatoClient() {
  const [formType, setFormType] = useState<"investor" | "broker" | null>(null);

  return (
    <div className="main_container py-10 flex justify-center gap-10">
      <Button onClick={() => setFormType("investor")} variant="outlinedGold">
        Sou Investidor
      </Button>

      <Button onClick={() => setFormType("broker")} variant="outlinedGold">
        Sou Corretor
      </Button>

      <FloatingFormModal open={!!formType} onClose={() => setFormType(null)}>
        {formType === "investor" && <InvestorForm />}    {formType === "broker" && <BrokerForm />}
      </FloatingFormModal>
    </div>
  );
}