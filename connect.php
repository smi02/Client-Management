<?php
    class connect {
        private $dbHost = "localhost";
        private $dbName = "client";
        private $dbUser = "root";
        private $dbPass = "";

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