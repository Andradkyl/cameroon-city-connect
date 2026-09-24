import { createFileRoute } from "@tanstack/react-router";
import { CivicApp } from "@/components/civic-app";
export const Route = createFileRoute("/")({
 head:()=>({meta:[{title:"Services municipaux — Votre ville"},{name:"description",content:"Effectuez et suivez vos démarches municipales en ligne."},{property:"og:title",content:"Services municipaux — Votre ville"},{property:"og:description",content:"Documents, rendez-vous et signalements depuis un espace municipal unique."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),
 component:CivicApp
});
