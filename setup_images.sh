#!/bin/bash
# Script to manually copy ALL 10 missing images
echo "Restoring ALL blog images from artifacts..."

SRC="/Users/fallcon/.gemini/antigravity/brain/ff47ea3a-d0cc-4244-b5f0-1ff15efa9f7d"
DST="/Users/fallcon/Documents/DEV/dabia-clinic/src/assets/blog"

# Ensure destination exists
mkdir -p "$DST"

# 1. Choosing a dentist
cp -f "$SRC/choisir_bon_dentiste_dakar_1768864764726.png" "$DST/choisir_bon_dentiste_dakar.png"

# 2. Whitening
cp -f "$SRC/blanchiment_efficace_senegal_1768864778430.png" "$DST/blanchiment_efficace_senegal.png"

# 3. Implants (The one causing error)
cp -f "$SRC/implant_retrouver_sourire_1768864791906.png" "$DST/implant_retrouver_sourire.png"

# 4. Toothache Remedy
cp -f "$SRC/remede_rage_dent_1768864814135.png" "$DST/remede_rage_dent.png"

# 5. Gingivitis
cp -f "$SRC/gingivite_traitement_1768864826378.png" "$DST/gingivite_traitement.png"

# 6. Orthodontics
cp -f "$SRC/orthodontie_adulte_choix_1768864839099.png" "$DST/orthodontie_adulte_choix.png"

# 7. Child Health
cp -f "$SRC/sante_dentaire_enfants_senegal_1768864853312.png" "$DST/sante_dentaire_enfants_senegal.png"

# 8. Preventive Scaling
cp -f "$SRC/detartrage_preventif_1768864866817.png" "$DST/detartrage_preventif.png"

# 9. Sealants (Pediatric)
cp -f "$SRC/scellants_sillons_enfant_1768870109764.png" "$DST/scellants_sillons_enfant.png"

# 10. First Visit (Pediatric)
cp -f "$SRC/dentiste_enfant_premier_rdv_1768870125072.png" "$DST/dentiste_enfant_premier_rdv.png"

# Verify
echo "Listing copied files:"
ls -l "$DST/choisir_bon_dentiste_dakar.png"
ls -l "$DST/blanchiment_efficace_senegal.png"
ls -l "$DST/implant_retrouver_sourire.png"
ls -l "$DST/remede_rage_dent.png"
ls -l "$DST/gingivite_traitement.png"
ls -l "$DST/orthodontie_adulte_choix.png"
ls -l "$DST/sante_dentaire_enfants_senegal.png"
ls -l "$DST/detartrage_preventif.png"
ls -l "$DST/scellants_sillons_enfant.png"
ls -l "$DST/dentiste_enfant_premier_rdv.png"

echo "Done! Please run 'npm run dev' again."
