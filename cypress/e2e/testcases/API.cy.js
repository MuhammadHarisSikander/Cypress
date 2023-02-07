let getReservationListUrl = "https://qa.petplannersoftware.com/api/reservation/v1/reservation/booking"
let cancelReservationUrl = "https://qa.petplannersoftware.com/api/reservation/v1/reservation/cancel/"
let getCheckedInPets = "https://qa.petplannersoftware.com/api/reservation/v1/reservation/check-out"
let reservationIds = []
describe("Cancel a Reservation & Checkout reservation",
    () => {
        it("Get pet reservations & Cancel the booking", () => {
            cy.request({
                method: 'GET',
                url: getReservationListUrl,
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJjVFotaXpzTVU3TGtodGJfbDFudVByRkNfTERaQ0hrMnRabzFjanJfVWVrIn0.eyJleHAiOjE3Mjc1Mjc1ODMsImlhdCI6MTY3NTY4NzU4MywianRpIjoiODRjMzQ5YzUtOTI0OC00NzM0LWIyMDctZWZmMGViMWI4MjJiIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5wZXRwbGFubmVyc29mdHdhcmUuY29tL2F1dGgvcmVhbG1zL3FhX2xtZHIiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiYTYxMzdmNTQtZGViNi00ZWFiLWJjNWUtODMxMjdjOTNhODc2IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiY2xpZW50LWFkbWluLWFjY291bnQiLCJzZXNzaW9uX3N0YXRlIjoiNjhiNTI4YjQtM2RlNy00ZTZjLThkMTgtNDNmZmU3YTZmMzlhIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwOi8vbG9jYWxob3N0OjQyMDAiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJFbG9uIE11c2siLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJlbG9ucXF6cHdoIiwiZ2l2ZW5fbmFtZSI6IkVsb24iLCJmYW1pbHlfbmFtZSI6Ik11c2siLCJlbWFpbCI6ImVsb24ubXVza0B5b3BtYWlsLmNvbSJ9.d21u2zgq6WaaD25DOgfCikIOgGPCKrUtoldTeeYQKRQRj0dvgjHdcQcFNHkvU048BL5rxuyswPIp9GagRozhyBKvNS1hGaQALmEEM4L03mXU0qVOFLSwN5XgK90WBrATF-zn9uaHgJ5vCW1LjcGdBuyKSDvuseSJO5JHg9FltMnF01OPZeiQ3k8zeXk_PN8d4j0gM5_EMtNrf2X0GQrW0QmNIfjOr0xBthpxDkExY3lEpShq55iQ3YCOdrL_UDdwNDY_9mK6sXCdtAhLcr0LaZrtiVSZlMl6XyHLZEbQ4z5_pacJIRoaMgtjaVaHcE745GLvmTsw-ixlUcR-LSNFKg',
                    accept: 'application/json',
                },
            }).then((val) => {
                val.body.content.map((id) => {
                    console.log("Saim", id.reservationGroupId);
                    cy.request({
                        method: 'DELETE',
                        url: cancelReservationUrl + id.reservationGroupId,
                        headers: {
                            Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJjVFotaXpzTVU3TGtodGJfbDFudVByRkNfTERaQ0hrMnRabzFjanJfVWVrIn0.eyJleHAiOjE3Mjc1Mjc1ODMsImlhdCI6MTY3NTY4NzU4MywianRpIjoiODRjMzQ5YzUtOTI0OC00NzM0LWIyMDctZWZmMGViMWI4MjJiIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5wZXRwbGFubmVyc29mdHdhcmUuY29tL2F1dGgvcmVhbG1zL3FhX2xtZHIiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiYTYxMzdmNTQtZGViNi00ZWFiLWJjNWUtODMxMjdjOTNhODc2IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiY2xpZW50LWFkbWluLWFjY291bnQiLCJzZXNzaW9uX3N0YXRlIjoiNjhiNTI4YjQtM2RlNy00ZTZjLThkMTgtNDNmZmU3YTZmMzlhIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwOi8vbG9jYWxob3N0OjQyMDAiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJFbG9uIE11c2siLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJlbG9ucXF6cHdoIiwiZ2l2ZW5fbmFtZSI6IkVsb24iLCJmYW1pbHlfbmFtZSI6Ik11c2siLCJlbWFpbCI6ImVsb24ubXVza0B5b3BtYWlsLmNvbSJ9.d21u2zgq6WaaD25DOgfCikIOgGPCKrUtoldTeeYQKRQRj0dvgjHdcQcFNHkvU048BL5rxuyswPIp9GagRozhyBKvNS1hGaQALmEEM4L03mXU0qVOFLSwN5XgK90WBrATF-zn9uaHgJ5vCW1LjcGdBuyKSDvuseSJO5JHg9FltMnF01OPZeiQ3k8zeXk_PN8d4j0gM5_EMtNrf2X0GQrW0QmNIfjOr0xBthpxDkExY3lEpShq55iQ3YCOdrL_UDdwNDY_9mK6sXCdtAhLcr0LaZrtiVSZlMl6XyHLZEbQ4z5_pacJIRoaMgtjaVaHcE745GLvmTsw-ixlUcR-LSNFKg',
                            accept: 'application/json',
                        },
                    }).then((response) => {
                        console.log(response);
                    })

                })
            })
        })

        // checking-out pet
        it("Get checked-in pet & checking-out", () => {
            cy.request({
                method: 'GET',
                url: getCheckedInPets,
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJjVFotaXpzTVU3TGtodGJfbDFudVByRkNfTERaQ0hrMnRabzFjanJfVWVrIn0.eyJleHAiOjE3Mjc1Mjc1ODMsImlhdCI6MTY3NTY4NzU4MywianRpIjoiODRjMzQ5YzUtOTI0OC00NzM0LWIyMDctZWZmMGViMWI4MjJiIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5wZXRwbGFubmVyc29mdHdhcmUuY29tL2F1dGgvcmVhbG1zL3FhX2xtZHIiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiYTYxMzdmNTQtZGViNi00ZWFiLWJjNWUtODMxMjdjOTNhODc2IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiY2xpZW50LWFkbWluLWFjY291bnQiLCJzZXNzaW9uX3N0YXRlIjoiNjhiNTI4YjQtM2RlNy00ZTZjLThkMTgtNDNmZmU3YTZmMzlhIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwOi8vbG9jYWxob3N0OjQyMDAiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJFbG9uIE11c2siLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJlbG9ucXF6cHdoIiwiZ2l2ZW5fbmFtZSI6IkVsb24iLCJmYW1pbHlfbmFtZSI6Ik11c2siLCJlbWFpbCI6ImVsb24ubXVza0B5b3BtYWlsLmNvbSJ9.d21u2zgq6WaaD25DOgfCikIOgGPCKrUtoldTeeYQKRQRj0dvgjHdcQcFNHkvU048BL5rxuyswPIp9GagRozhyBKvNS1hGaQALmEEM4L03mXU0qVOFLSwN5XgK90WBrATF-zn9uaHgJ5vCW1LjcGdBuyKSDvuseSJO5JHg9FltMnF01OPZeiQ3k8zeXk_PN8d4j0gM5_EMtNrf2X0GQrW0QmNIfjOr0xBthpxDkExY3lEpShq55iQ3YCOdrL_UDdwNDY_9mK6sXCdtAhLcr0LaZrtiVSZlMl6XyHLZEbQ4z5_pacJIRoaMgtjaVaHcE745GLvmTsw-ixlUcR-LSNFKg',
                    accept: 'application/json',
                },
            }).then((val) => {
                console.log(val);
                val.body.pets.map((id) => {
                    console.log(id.reservation.groupId, "Haris");
                    cy.request({
                        method: 'POST',
                        url: getCheckedInPets,
                        headers: {
                            Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJjVFotaXpzTVU3TGtodGJfbDFudVByRkNfTERaQ0hrMnRabzFjanJfVWVrIn0.eyJleHAiOjE3Mjc1Mjc1ODMsImlhdCI6MTY3NTY4NzU4MywianRpIjoiODRjMzQ5YzUtOTI0OC00NzM0LWIyMDctZWZmMGViMWI4MjJiIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5wZXRwbGFubmVyc29mdHdhcmUuY29tL2F1dGgvcmVhbG1zL3FhX2xtZHIiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiYTYxMzdmNTQtZGViNi00ZWFiLWJjNWUtODMxMjdjOTNhODc2IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiY2xpZW50LWFkbWluLWFjY291bnQiLCJzZXNzaW9uX3N0YXRlIjoiNjhiNTI4YjQtM2RlNy00ZTZjLThkMTgtNDNmZmU3YTZmMzlhIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwOi8vbG9jYWxob3N0OjQyMDAiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJFbG9uIE11c2siLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJlbG9ucXF6cHdoIiwiZ2l2ZW5fbmFtZSI6IkVsb24iLCJmYW1pbHlfbmFtZSI6Ik11c2siLCJlbWFpbCI6ImVsb24ubXVza0B5b3BtYWlsLmNvbSJ9.d21u2zgq6WaaD25DOgfCikIOgGPCKrUtoldTeeYQKRQRj0dvgjHdcQcFNHkvU048BL5rxuyswPIp9GagRozhyBKvNS1hGaQALmEEM4L03mXU0qVOFLSwN5XgK90WBrATF-zn9uaHgJ5vCW1LjcGdBuyKSDvuseSJO5JHg9FltMnF01OPZeiQ3k8zeXk_PN8d4j0gM5_EMtNrf2X0GQrW0QmNIfjOr0xBthpxDkExY3lEpShq55iQ3YCOdrL_UDdwNDY_9mK6sXCdtAhLcr0LaZrtiVSZlMl6XyHLZEbQ4z5_pacJIRoaMgtjaVaHcE745GLvmTsw-ixlUcR-LSNFKg',
                            accept: 'application/json',
                        },
                        body: {

                            checkInType: "RESERVATION",
                            locationId: id.reservation.locationId,
                            reservationGroupId: id.reservation.groupId,
                            serviceTag: id.reservation.serviceTag
                        }
                    }).then((response) => {
                        console.log(response);
                    })

                })
            })

        })


    })

