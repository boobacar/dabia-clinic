import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <img
        src={logo}
        alt="Dentiste Dakar - Clinique dentaire DABIA"
        className="w-16 h-16 rounded-full object-contain mb-4 shadow-md"
      />
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
        Page introuvable
      </h1>
      <p className="text-gray-600 max-w-md mb-6">
        Désolé, la page que vous cherchez n&apos;existe pas ou a été déplacée.
        Utilisez la navigation ou revenez à l&apos;accueil.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link to="/" className="btn-glassy">
          Retour à l&apos;accueil
        </Link>
        <Link to="/rendez-vous" className="ripple btn-cta btn-cta-sm">
          Prendre rendez-vous
        </Link>
      </div>
    </main>
  );
}
