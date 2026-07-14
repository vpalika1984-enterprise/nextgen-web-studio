"use client";

import { BedDouble, Maximize2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface RoomCardData {
  slug: string;
  name: string;
  status: "Available" | "Limited Availability" | "Sold Out";
  pricePerNight: string;
  bedType: string;
  maxOccupancy: number;
  sizeSqft: number;
  view: string;
  imageAlt: string;
  description: string;
}

interface RoomCardProps {
  room: RoomCardData;
  accentClassName?: string;
  onCheckAvailability?: (room: RoomCardData) => void;
}

const STATUS_STYLES: Record<RoomCardData["status"], string> = {
  Available: "bg-emerald-100 text-emerald-800",
  "Limited Availability": "bg-amber-100 text-amber-800",
  "Sold Out": "bg-slate-200 text-slate-600",
};

/**
 * RoomCard
 *
 * Generic listing card for a single bookable hotel unit. Presentation
 * only, mirrors the PropertyCard pattern from the Real Estate demo but
 * swaps beds/baths/sqft for occupancy, bed type, and view, which fit
 * hospitality listings. Reusable across future hospitality demos.
 */
export function RoomCard({
  room,
  accentClassName = "text-slate-900",
  onCheckAvailability,
}: RoomCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <div
        role="img"
        aria-label={room.imageAlt}
        className="relative flex h-56 w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200"
      >
        <span className="text-sm font-medium text-slate-400">Room Photo</span>
        <div className="absolute left-4 top-4">
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${STATUS_STYLES[room.status]}`}>
            {room.status}
          </span>
        </div>
        <div className="absolute right-4 top-4">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700">
            {room.view}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-slate-900">{room.name}</h3>
          <p className={`whitespace-nowrap text-lg font-bold ${accentClassName}`}>
            {room.pricePerNight}
          </p>
        </div>

        <p className="text-sm leading-relaxed text-slate-600">{room.description}</p>

        <div className="mt-auto flex items-center gap-4 border-t border-slate-100 pt-4 text-sm text-slate-600">
          <span className="flex items-center gap-1.5">
            <BedDouble className="h-4 w-4" aria-hidden="true" />
            {room.bedType}
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="h-4 w-4" aria-hidden="true" />
            Sleeps {room.maxOccupancy}
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize2 className="h-4 w-4" aria-hidden="true" />
            {room.sizeSqft} sqft
          </span>
        </div>

        <Button
          variant="outline"
          className="mt-2 w-full"
          onClick={() => onCheckAvailability?.(room)}
        >
          Check Availability
        </Button>
      </div>
    </article>
  );
}
