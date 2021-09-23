RegisterCommand("rear", function() {
  TriggerEvent("zf:toggleRearDoors")
}, false);
TriggerEvent("zf:toggleRearDoors", "/rear", "")

AddEventHandler("zf:toggleRearDoors", function() {
  const [hit, ent, coords, norm, dist] = vehicleInFront();
  if (hit && IsEntityAVehicle(ent)) {
    const vehicle = ent;
    if (IsVehicleDoorFullyOpen(vehicle, 6) && IsVehicleDoorFullyOpen(vehicle, 7)) {
      SetVehicleDoorShut(vehicle, 6, false);
      SetVehicleDoorShut(vehicle, 7, false);
    } else {
      SetVehicleDoorOpen(vehicle, 6, false, false);
      SetVehicleDoorOpen(vehicle, 7, false, false);
    }
  }
})

function vehicleInFront(){
  const player = PlayerPedId();
  const pos = GetEntityCoords(player, true);
  const entWorld = GetOffsetFromEntityInWorldCoords(player, 0.0, 20.0, 0.0);
  const ray = CastRayPointToPoint(pos[0], pos[1], pos[2], entWorld[0], entWorld[1], entWorld[2], 2, player, 0);
  const hit = GetRaycastResult(ray);
  return hit;
}
