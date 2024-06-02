<?php
    class connect {
        private $dbHost = "localhost";
        private $dbName = "id22240242_clients";
        private $dbUser = "id22240242_root";
        private $dbPass = "1572881996@Dq";

        public function connect() {
            try {
                $conn = new PDO('mysql:host=' . $this->dbHost . ';dbname=' . $this->dbName, $this->dbUser, $this->dbPass);
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                return $conn;
            } catch (\Exception $e) {
                echo "Database Error: " . $e->getMessage();
            }
        }
    };
?>