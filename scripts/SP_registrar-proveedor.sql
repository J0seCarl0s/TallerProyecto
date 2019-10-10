USE `restaurante`;
DROP procedure IF EXISTS `registrar_proveedor`;

DELIMITER $$
USE `restaurante`$$
CREATE PROCEDURE `registrar_proveedor` (
	IN in_nombre_proveedor VARCHAR(50),
	IN in_direccion_proveedor VARCHAR(50),
	IN descripcion VARCHAR(50),
	IN created_at TIMESTAMP,
	IN updated_at TIMESTAMP
)
BEGIN
	SET AUTOCOMMIT = 0;
	SET in_fecha=now();
    START TRANSACTION;
    
    INSERT INTO proveedores (idproveedor,nombre_proveedor, direccion_proveedor,
				descripcion, created_at, updated_at) 
			VALUES (in_nombre_proveedor, in_nombre_proveedor, in_direccion_proveedor,
				in_descripcion, in_fecha, in_fecha);
    
    SET AUTOCOMMIT = 1;
END$$

DELIMITER ;
