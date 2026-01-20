#!/bin/bash

# Define source and destination
SRC="/Users/fallcon/.gemini/antigravity/brain/ff47ea3a-d0cc-4244-b5f0-1ff15efa9f7d"
DST="/Users/fallcon/Documents/DEV/dabia-clinic/src/assets/blog"

echo "Starting image copy..."

# Copy each file
cp "$SRC/blanchiment_efficace_senegal_1768864778430.png" "$DST/blanchiment_efficace_senegal.png"
cp "$SRC/choisir_bon_dentiste_dakar_1768864764726.png" "$DST/choisir_bon_dentiste_dakar.png"
cp "$SRC/detartrage_preventif_1768864866817.png" "$DST/detartrage_preventif.png"
cp "$SRC/gingivite_traitement_1768864826378.png" "$DST/gingivite_traitement.png"
cp "$SRC/implant_retrouver_sourire_1768864791906.png" "$DST/implant_retrouver_sourire.png"
cp "$SRC/orthodontie_adulte_choix_1768864839099.png" "$DST/orthodontie_adulte_choix.png"
cp "$SRC/remede_rage_dent_1768864814135.png" "$DST/remede_rage_dent.png"
cp "$SRC/sante_dentaire_enfants_senegal_1768864853312.png" "$DST/sante_dentaire_enfants_senegal.png"

echo "Copy finished. Listing destination:"
ls -l "$DST"
