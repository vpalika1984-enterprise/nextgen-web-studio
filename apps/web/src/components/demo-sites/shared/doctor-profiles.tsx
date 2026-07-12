import { GraduationCap, Languages } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

export interface DoctorProfile {
    name: string;
    credentials: string;
    specialty: string;
    bio: string;
    yearsExperience: number;
    languages: string[];
}

interface DoctorProfilesProps {
    id?: string;
    title?: string;
    subtitle?: string;
    doctors: DoctorProfile[];
    accentClassName?: string;
}

/**
 * DoctorProfiles
 *
 * Reusable provider/doctor directory grid for healthcare demo sites.
 * Accepts its doctor list and copy via props (rather than hard-coding a
 * single clinic's providers) so this same component can support this
 * clinic demo today and a future hospital demo later without changes.
 */
export function DoctorProfiles({
    id = "doctors",
    title = "Meet Our Providers",
    subtitle = "Board-certified physicians dedicated to unhurried, patient-first care.",
    doctors,
    accentClassName = "text-teal-600",
}: DoctorProfilesProps) {
    return (
          <Section id={id} className="bg-white">
                <Container>
                        <div className="mx-auto max-w-2xl text-center">
                                  <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                                    {title}
                                  </h2>
                                  <p className="mt-4 text-slate-600">{subtitle}</p>
                        </div>
                        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                          {doctors.map((doctor) => (
                        <div
                                        key={doctor.name}
                                        className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6"
                                      >
                                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-600/10">
                                                      <span className={`text-lg font-semibold ${accentClassName}`}>
                                                        {doctor.name
                                                                              .replace(/^Dr\.\s*/, "")
                                                                              .split(" ")
                                                                              .map((part) => part[0])
                                                                              .join("")
                                                                              .slice(0, 2)}
                                                      </span>
                                      </div>
                                      <h3 className="mt-4 text-base font-semibold text-slate-900">{doctor.name}</h3>
                                      <p className={`mt-1 text-xs font-medium uppercase tracking-wide ${accentClassName}`}>
                                        {doctor.specialty}
                                      </p>
                                      <p className="mt-3 text-xs text-slate-500">{doctor.credentials}</p>
                                      <p className="mt-3 flex-1 text-sm text-slate-600">{doctor.bio}</p>
                                      <div className="mt-4 space-y-1.5 border-t border-slate-200 pt-4 text-xs text-slate-500">
                                                      <p className="flex items-center gap-1.5">
                                                                        <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
                                                        {doctor.yearsExperience} years experience
                                                      </p>
                                                      <p className="flex items-center gap-1.5">
                                                                        <Languages className="h-3.5 w-3.5" aria-hidden="true" />
                                                        {doctor.languages.join(", ")}
                                                      </p>
                                      </div>
                        </div>
                      ))}
                        </div>
                </Container>
          </Section>
        );
}
