import SectionTerrenos from "@/components/Sections/SectionTerrenos";
import { Metadata } from "next";
export const fetchCache = "force-no-store";

export const metadata: Metadata = {
  title: "NexxLand | Terrenos",
  description:
    "Terrenos à venda na NexxLand. Encontre o terreno ideal para você!",
};

export default async function ProductsPage() {
  return <SectionTerrenos />;
}
