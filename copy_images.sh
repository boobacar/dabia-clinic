#!/bin/bash
exec > copy_log.txt 2>&1
echo "Starting copy script..."

SRC_DIR="/Users/fallcon/.gemini/antigravity/brain/ff47ea3a-d0cc-4244-b5f0-1ff15efa9f7d"
DST_DIR="/Users/fallcon/Documents/DEV/dabia-clinic/src/assets/blog"

echo "Checking source directory:"
ls -la "$SRC_DIR"

echo "Checking destination directory:"
ls -la "$DST_DIR"

echo "Copying files..."

cp -v "$SRC_DIR/blanchiment_efficace_senegal_1768864778430.png" "$DST_DIR/blanchiment_efficace_senegal.png"
cp -v "$SRC_DIR/choisir_bon_dentiste_dakar_1768864764726.png" "$DST_DIR/choisir_bon_dentiste_dakar.png"
cp -v "$SRC_DIR/detartrage_preventif_1768864866817.png" "$DST_DIR/detartrage_preventif.png"
cp -v "$SRC_DIR/gingivite_traitement_1768864826378.png" "$DST_DIR/gingivite_traitement.png"
cp -v "$SRC_DIR/implant_retrouver_sourire_1768864791906.png" "$DST_DIR/implant_retrouver_sourire.png"
cp -v "$SRC_DIR/orthodontie_adulte_choix_1768864839099.png" "$DST_DIR/orthodontie_adulte_choix.png"
cp -v "$SRC_DIR/remede_rage_dent_1768864814135.png" "$DST_DIR/remede_rage_dent.png"
cp -v "$SRC_DIR/sante_dentaire_enfants_senegal_1768864853312.png" "$DST_DIR/sante_dentaire_enfants_senegal.png"

echo "Copy complete. Checking destination again:"
ls -la "$DST_DIR"
