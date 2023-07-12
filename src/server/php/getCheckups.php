<?php
function getCheckups() {
  $jsonData = file_get_contents('../db/database.json');
  $data = json_decode($jsonData, true);

  return $data;
}

header('Content-Type: application/json');

echo json_encode(getCheckups());
?>