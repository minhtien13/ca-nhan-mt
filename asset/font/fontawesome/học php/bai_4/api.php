<?php 

$data = [
    ['id' => 1, 'name' => 'Nguyễn Văn A'],
    ['id' => 2, 'name' => 'Nguyễn Văn B'],
    ['id' => 3, 'name' => 'Nguyễn Văn C'],
    ['id' => 4, 'name' => 'Nguyễn Văn D']
];

header('Content-type: application/json');
echo json_encode($data);

?>