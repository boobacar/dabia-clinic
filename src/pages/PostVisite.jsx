import { motion } from "framer-motion";

const PostVisite = () => {
  const sections = [
    {
      titre: "Après une extraction dentaire (dent de sagesse incluse)",
      contenu: [
        "Mordez sur une compresse stérile pendant 30 à 60 minutes pour contrôler le saignement.",
        "Ne crachez pas, ne rincez pas la bouche et ne buvez pas à la paille durant les premières 24 heures afin de ne pas déloger le caillot sanguin.",
        "Évitez de fumer pendant au moins 72 heures (idéalement une semaine).",
        "Appliquez une poche de glace sur la joue (20 min on / 20 min off) pendant les premières 24 heures pour limiter le gonflement.",
        "Prenez les antidouleurs et anti‑inflammatoires prescrits, même si la douleur reste modérée.",
        "Évitez l’exercice physique intense pendant 48 à 72 heures.",
        "Alimentation : privilégiez purée, soupe tiède, compote, yaourt ; évitez les aliments durs, chauds, épicés ou croquants.",
        "Hygiène : ne brossez pas la zone opérée pendant 24 h ; à partir du 2ᵉ jour, brossage doux et rinçages à l’eau tiède salée (½ c. à c. de sel dans un verre) 2‑3 fois/jour.",
      ],
    },
    {
      titre: "Après une chirurgie parodontale (gencives)",
      contenu: [
        "Appliquez des compresses froides contre la joue pour réduire l’œdème.",
        "Évitez tout traumatisme mécanique dans la zone opérée (brosse dure, aliments durs, appareils).",
        "Ne brossez pas la zone opérée tant que le chirurgien ne l’autorise pas.",
        "Utilisez un bain de bouche antiseptique (chlorhexidine) selon la prescription.",
        "Respectez les rendez‑vous de suivi pour détartrage ou retrait des points de suture.",
      ],
    },
    {
      titre: "Après la pose d’un implant dentaire",
      contenu: [
        "Compresses stériles, repos et alimentation molle comme après une extraction.",
        "Maintenez une hygiène douce sans contact direct avec l’implant (brosse chirurgicale).",
        "Évitez toute pression ou contact mécanique sur la zone (prothèse amovible comprise).",
        "Ne touchez pas et ne manipulez pas l’implant avec la langue ou les doigts.",
        "Revenez aux contrôles post‑opératoires à J+7, J+14 puis selon le calendrier de mise en charge.",
      ],
    },
    {
      titre: "Après un traitement de canal (dévitalisation)",
      contenu: [
        "Une sensibilité est normale pendant quelques jours.",
        "Évitez de mâcher du côté traité tant que la couronne définitive n’est pas posée.",
        "Prenez les antalgiques (et antibiotiques si prescrits).",
        "Planifiez la restauration définitive (couronne ou inlay/onlay) si elle n’est pas faite le jour même.",
      ],
    },
    {
      titre: "Après un détartrage en profondeur (surfaçage radiculaire)",
      contenu: [
        "Sensibilité au chaud/froid pendant quelques jours : utilisez un dentifrice pour dents sensibles.",
        "Évitez les aliments durs pendant 24 heures.",
        "Maintenez une hygiène stricte : brossage doux, brossettes interdentaires, bain de bouche antiseptique.",
      ],
    },
    {
      titre: "Conseils généraux pour tous traitements chirurgicaux",
      contenu: [
        "Repos : pas d’activité physique intense pendant 2‑3 jours.",
        "Tabac et alcool : à éviter pendant au moins 7 jours car cela retarde la cicatrisation.",
        "Médication : suivez scrupuleusement les prescriptions.",
        "Surveillez : fièvre, douleur intense malgré les médicaments, saignement abondant, gonflement qui augmente après 48 h — appelez la clinique.",
      ],
    },
    {
      titre: "Hygiène bucco‑dentaire avec appareil orthodontique",
      contenu: [
        "Brossage minutieux après chaque repas (3 fois/jour) avec une brosse souple ou électrique.",
        "Utilisez des brossettes interdentaires autour des brackets ou entre les aligneurs.",
        "Fil dentaire spécial orthodontie ou hydropulseur recommandé.",
        "Dentifrice et bain de bouche fluorés pour prévenir caries et déminéralisations.",
      ],
    },
    {
      titre: "Conseils alimentaires avec appareil orthodontique",
      contenu: [
        "Évitez les aliments collants ou sucrés : chewing‑gum, caramel, bonbons.",
        "Évitez les aliments durs : noix, bonbons durs, glaçons, croûtes de pizza.",
        "Coupez les aliments comme les pommes ou sandwichs en morceaux plutôt que de croquer.",
        "Limitez fortement les boissons sucrées/gazeuses (sodas).",
        "Privilégiez riz, pâtes, légumes cuits, purée, yaourt.",
      ],
    },
    {
      titre: "Entretien et manipulation de l’appareil orthodontique",
      contenu: [
        "Appareil fixe : ne touchez pas avec les doigts ; utilisez de la cire si un fil irrite.",
        "Aligneurs : portez‑les 22 h/jour minimum, retirez‑les seulement pour manger ou brosser les dents, nettoyez‑les à l’eau tiède et brosse douce.",
        "Appareil amovible : port selon prescriptions, nettoyage quotidien, rangement dans une boîte aérée.",
      ],
    },
    {
      titre: "Que faire en cas de problème avec l’appareil",
      contenu: [
        "Bracket décollé, fil cassé ou douloureux : contactez la clinique rapidement.",
        "Douleurs après activation : normales 2‑3 jours ; prenez du paracétamol (pas d’aspirine).",
        "Aligneur perdu ou fissuré : ne passez pas à la gouttière suivante sans avis.",
        "Irritation des muqueuses : cire orthodontique ou rinçage à l’eau tiède salée.",
      ],
    },
    {
      titre: "Suivi et rendez‑vous (orthodontie)",
      contenu: [
        "Les ajustements réguliers sont indispensables au bon déroulement du traitement.",
        "Respectez les rendez‑vous mensuels ou bimensuels.",
        "Prévenez en cas d’empêchement pour reprogrammer au plus vite.",
      ],
    },
    {
      titre: "Fin de traitement : contention",
      contenu: [
        "Port d’un fil ou de gouttières de contention pour maintenir les résultats.",
        "Suivez rigoureusement les consignes de port et d’entretien.",
        "Des visites de contrôle seront planifiées pour vérifier la stabilité à long terme.",
      ],
    },
    {
      titre: "Engagement du patient (orthodontie)",
      contenu: [
        "Port régulier et rigoureux de l’appareil.",
        "Hygiène buccale impeccable.",
        "Respect des consignes alimentaires et des rendez‑vous.",
        "Communication rapide en cas de souci.",
      ],
    },
    {
      titre: "Après la pose de prothèses fixes (couronnes, bridges)",
      contenu: [
        "Sensibilité au chaud/froid ou à la pression normale quelques jours à quelques semaines.",
        "Douleur vive >7 jours : consultez immédiatement.",
        "Une gêne de morsure temporaire est possible ; si la prothèse semble trop haute, demandez un ajustement.",
        "Évitez les aliments durs ou collants les premiers jours et coupez les aliments en petits morceaux.",
        "Hygiène : brossez‑vous 2‑3 fois/jour, utilisez fil/brossettes interdentaires et hydropulseur.",
        "Évitez de mâcher des objets durs (stylo, ongles).",
        "Contrôle chez le dentiste tous les 6‑12 mois.",
      ],
    },
    {
      titre:
        "Après la livraison de prothèses amovibles (partielles ou complètes)",
      contenu: [
        "Gêne ou sensation de corps étranger normale les premiers jours.",
        "Port continu en journée, retrait la nuit pour reposer les muqueuses (sauf indication contraire).",
        "Nettoyez la prothèse 2 fois/jour à l’eau tiède savonneuse ; pas d’eau chaude.",
        "Trempez‑la dans une solution nettoyante 2 fois/semaine.",
        "Brossez dents restantes, gencives et langue pour prévenir infections et irritations.",
        "Conservez la prothèse dans de l’eau claire lorsqu’elle n’est pas portée.",
        "Contrôle régulier tous les 6‑12 mois.",
      ],
    },
    {
      titre: "Signes nécessitant une consultation rapide (prothèses)",
      contenu: [
        "Douleurs persistantes >7 jours.",
        "Mobilité ou usure prématurée de la prothèse fixe.",
        "Blessures, aphtes ou saignements répétés sous une prothèse amovible.",
        "Mauvaise haleine persistante malgré un bon entretien.",
      ],
    },
    {
      titre: "Engagement du patient (prothèses)",
      contenu: [
        "Hygiène quotidienne rigoureuse.",
        "Respect du port et des consignes du praticien.",
        "Contrôles réguliers auprès du dentiste.",
      ],
    },
    // Sections existantes conservées pour les traitements esthétiques
    {
      titre: "Après un blanchiment dentaire",
      contenu: [
        "Évitez le café, le thé, le vin rouge et le tabac pendant au moins 48 h.",
        "Utilisez un dentifrice adapté aux dents sensibles si besoin.",
        "Respectez les recommandations de fréquence pour conserver les résultats.",
      ],
    },
    {
      titre: "Après un soin esthétique ou orthodontique",
      contenu: [
        "Respectez les consignes spécifiques données par le praticien.",
        "Signalez rapidement tout décollement ou inconfort.",
        "Continuez les rendez‑vous de suivi régulièrement.",
      ],
    },
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto mt-20">
      <motion.h2
        className="text-4xl font-bold text-[#ad9d64] text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Conseils après visite (Post-opération)
      </motion.h2>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Ces recommandations vous permettent de bien récupérer après vos soins
        dentaires à la Clinique Dentaire Dabia. En cas de doute, n’hésitez pas à
        nous contacter.
      </p>

      <div className="space-y-10">
        {sections.map((sec, i) => (
          <motion.div
            key={i}
            className="bg-white shadow-md rounded-lg p-6 border-l-4 border-[#ad9d64] hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl text-[#bb2988] font-bold mb-4">
              {sec.titre}
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
              {sec.contenu.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PostVisite;
