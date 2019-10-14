USE `restaurante`;
DROP procedure IF EXISTS `desactivar_usuario`;

DELIMITER $$
USE `restaurante`$$
CREATE DEFINER=`admin`@`%` PROCEDURE `desactivar_usuario`(IN in_id_usuario INTEGER)
/* Procedimiento que desactiva una cuenta de usuario de rol no administrador */
/* NOTA: SE ASUME QUE EL ROL DE ID 1 ES EL ROL ADMINISTRADOR */
BEGIN
	SET AUTOCOMMIT = 0;
    START TRANSACTION;

	SET @ID_ADMINISTRADOR = 1;
	IF (SELECT rol_id FROM users WHERE id = in_id_usuario) != @ID_ADMINISTRADOR THEN
		UPDATE users SET state = 0 
		WHERE (id = in_id_usuario);
        
        SELECT true AS ok, "Usuario desactivado correctamente" AS result;
	ELSE
		SELECT false AS ok, "El usuario es de tipo admministrador. 
				No se pudo desactivar su cuenta" AS result;
	END IF;
    
    SET AUTOCOMMIT = 1;
END$$

DELIMITER ;

