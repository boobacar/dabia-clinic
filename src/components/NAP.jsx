import React from "react";
import { MdLocationPin, MdEmail, MdPhone } from "react-icons/md";
import logo from "../assets/logo.jpg";

export default function NAP({ compact = false }) {
  return (
    <div>
      <div
        itemScope
        itemType="https://schema.org/LocalBusiness"
        className=" leading-relaxed max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <div className="flex gap-2 items-center">
          <img
            className="w-[20%] sm:w-[30%] rounded-full hover:animate-spin"
            src={logo}
            alt="Dentiste Dakar - Clinique dentaire DABIA"
          />
          <div>
            <strong
              itemProp="name"
              className="font-bold text-xl mb-2 text-center text-[#ad9d64]"
            >
              Clinique Dentaire DABIA
            </strong>
            <p>Clinique dentaire à Dakar, Sénégal</p>
          </div>
        </div>
        <div>
          <span
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              Adresse
            </h4>
            <span itemProp="streetAddress" className="flex gap-1">
              <MdLocationPin className="w-5 h-5" />
              Sicap Foire, 2 voies Liberté 6 à 150m du Uno,
            </span>
            <span itemProp="addressLocality">Dakar</span>,{" "}
            <span itemProp="addressCountry">Sénégal</span>
            <div className="mt-1 text-sm">
              <a className="underline" href="/cabinet-dentaire-liberte-6">
                Cabinet dentaire Liberté 6
              </a>{" "}
              •
              <a
                className="underline ml-1"
                href="/clinique-dentaire-parcelles-assainies"
              >
                Parcelles Assainies
              </a>
            </div>
          </span>
        </div>
        <div>
          <div className="flex gap-2">
            <MdPhone className="w-5 h-5" />
            <a itemProp="telephone" href="tel:+221777039393">
              +221 77 703 93 93
            </a>
            <MdPhone className="w-5 h-5" />
            <a itemProp="telephone" href="tel:+221338684704">
              +221 33 868 47 04
            </a>
          </div>
          <div className="flex gap-2">
            <MdEmail className="w-5 h-5" />
            <a itemProp="email" href="mailto:cliniquedentairedabia@gmail.com">
              cliniquedentairedabia@gmail.com
            </a>
          </div>
        </div>
      </div>
      {!compact && (
        <div className="text-center mt-2 text-[13px] text-gray-600">
          Horaires : Lun–Ven (9h–18h) · Sam (9h-14h) · Dim (fermé)
        </div>
      )}
    </div>
  );
}
