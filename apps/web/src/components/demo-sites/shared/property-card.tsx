"use client";

import { Bath, BedDouble, MapPin, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface PropertyCardData {
    slug: string;
    title: string;
    listingType: "For Sale" | "For Rent";
    status: "Active" | "Pending" | "New Listing";
    price: string;
    address: string;
    city: string;
    state: string;
    beds: number;
    baths: number;
    sqft: number;
    imageAlt: string;
    description: string;
}

interface PropertyCardProps {
    property: PropertyCardData;
    accentClassName?: string;
    onScheduleViewing?: (property: PropertyCardData) => void;
}

const STATUS_STYLES: Record<PropertyCardData["status"], string> = {
    Active: "bg-emerald-100 text-emerald-800",
    Pending: "bg-amber-100 text-amber-800",
    "New Listing": "bg-blue-100 text-blue-800",
};

export function PropertyCard({
    property,
    accentClassName = "text-amber-600",
    onScheduleViewing,
}: PropertyCardProps) {
    return (
          <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
                <div
                          role="img"
                          aria-label={property.imageAlt}
                          className="relative flex h-56 w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200"
                        >
                        <span className="text-sm font-medium text-slate-400">Property Photo</span>
                  <div className="absolute left-4 top-4 flex gap-2">
                    <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${STATUS_STYLES[property.status]}`}
                        >
                      {property.status}
                    </span>
                  </div>
                <div className="absolute right-4 top-4">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700">
                    {property.listingType}
                  </span>
                </div>
                </div>

            <div className="flex flex-1 flex-col gap-3 p-5">
            <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg font-semibold text-slate-900">{property.title}</h3>
            <p className={`whitespace-nowrap text-lg font-bold ${accentClassName}`}>
              {property.price}
            </p>
            </div>

              <p className="flex items-center gap-1.5 text-sm text-slate-500">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                {property.address}, {property.city}, {property.state}
              </p>
            
            <p className="text-sm leading-relaxed text-slate-600">{property.description}</p>

              <div className="mt-auto flex items-center gap-4 border-t border-slate-100 pt-4 text-sm text-slate-600">
                {property.beds > 0 && (
            <span className="flex items-center gap-1.5">
            <BedDouble className="h-4 w-4" aria-hidden="true" />
              {property.beds} Beds
            </span>
              )}
                {property.baths > 0 && (
            <span className="flex items-center gap-1.5">
            <Bath className="h-4 w-4" aria-hidden="true" />
              {property.baths} Baths
            </span>
              )}
              <span className="flex items-center gap-1.5">
              <Ruler className="h-4 w-4" aria-hidden="true" />
                {property.sqft.toLocaleString()} sqft
              </span>
              </div>
            
            <Button
              variant="outline"
              className="mt-2 w-full"
              onClick={() => onScheduleViewing?.(property)}
              >
            Schedule Viewing
            </Button>
            </div>
          </article>
        );
}
