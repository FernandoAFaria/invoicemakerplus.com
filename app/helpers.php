<?php


    $connection = mysqli_connect('localhost','root','Mustang1!','thefrontenddevdb');

    $users = mysqli_query($connection,'select * from contributor_info');

    while($row = mysqli_fetch_assoc($users)){

        ?>

        <div>
            <h5><?php echo $row['first_name'] ?> </h5>
            <img src="<?php echo $row['picture'] ?>" />
        </div>


<?php
    }
?>