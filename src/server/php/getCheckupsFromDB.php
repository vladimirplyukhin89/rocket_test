<?php
export function getCheckupsFromDB() {
    $db = new PDO('sqlite:/путь/к/вашей/базе/данных/database.db');
    $query = "SELECT * FROM checkups";
    $stmt = $db->prepare($query);
    $stmt->execute();
    $checkups = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $checkups;
}
?>
