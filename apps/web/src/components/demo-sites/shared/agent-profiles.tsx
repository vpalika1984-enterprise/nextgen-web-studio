"use client";

import { Mail, Phone } from "lucide-react";
import type { Agent } from "@/components/demo-sites/summit-realty-group/realty-data";

interface AgentProfilesProps {
    agents: Agent[];
    accentClassName?: string;
}

export function AgentProfiles({
    agents,
    accentClassName = "text-amber-600",
}: AgentProfilesProps) {
    return (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {agents.map((agent) => (
                    <div
                                key={agent.id}
                                className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
                              >
<div
  role="img"
  aria-label={agent.imageAlt}
  className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-slate-100 text-sm font-medium text-slate-400"
>
Photo
</div>
                    <h3 className="text-base font-semibold text-slate-900">{agent.name}</h3>
                    <p className={`text-sm font-medium ${accentClassName}`}>{agent.title}</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{agent.bio}</p>
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                      {agent.specialties.map((specialty) => (
  <span
    key={specialty}
    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
    >
    {specialty}
  </span>
  ))}
                    </div>
                      <div className="mt-4 flex flex-col gap-1.5 text-sm text-slate-500">
                      <a
                        href={`tel:${agent.phone}`}
                        className="flex items-center justify-center gap-1.5 hover:text-slate-900"
                        >
                      <Phone className="h-4 w-4" aria-hidden="true" />
                        {agent.phone}
                      </a>
                      <a
                        href={`mailto:${agent.email}`}
                        className="flex items-center justify-center gap-1.5 hover:text-slate-900"
                        >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                        {agent.email}
                      </a>
                      </div>
                    </div>
                    ))}
          </div>
      );
}
