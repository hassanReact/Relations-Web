function ajaxFormGet(formId, targetURL, fieldId, reset = false) {
    $("#success_message_container").hide();
    $("#error_message_container").hide();
    var form = $("#" + formId);
    var data = form.serialize();
    $.ajax({
            type: "GET",
            url: targetURL,
            data: data,
            form: form,
            dataType: "json",
        })
        .done(function(response) {
            $("#" + fieldId).html(response.data);
            $("#success_message_container").text(response.message);
            $("#success_message_container").show();
            setTimeout(function() {
                $("#success_message_container").hide();
                $("#success_message_container").text(response.message);
                if (reset) {
                    $("#" + formId)
                        .get(0)
                        .reset();
                }
            }, 3000);
        })
        .fail(function(jqXHR, textStatus, error) {
            if (fieldId != "couponDetails") {
                $("#error_message_container").show();
                setTimeout(function() {
                    $("#error_message_container").hide();
                }, 3000);
                if (jqXHR.status === 422) {
                    //parseErrors(jqXHR);
                } else {}
            }
        });
    return false;
}

const formSubmit = (
    formId,
    targetURL,
    fieldToPopulateData,
    reload = false,
    populate = true,
    custom_message = false
) => {
    const data = $("#" + formId).serialize();
    $.ajax({
            type: "POST",
            url: targetURL,
            data: data,
            form: $("#" + formId),
            dataType: "json",
        })
        .done(function(response) {
            if (populate) {
                $("#" + fieldToPopulateData).empty();
                $("#" + fieldToPopulateData).html(response.data);
            }
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: custom_message ?
                    response.message :
                    "Your work has been saved.!",
                showConfirmButton: false,
                timer: 3000,
            });
            $("#loader").css({
                display: "block"
            });

            if (reload) {
                setTimeout(() => {
                    location.reload();
                }, 3000);
            }

            setTimeout(() => {
                $("#loader").css({
                    display: "none"
                });
            }, 3000);
        })
        .fail(function(jqXHR, textStatus, error) {
            console.log(jqXHR);
            if (jqXHR.responseJSON.errors != null) {
                const errors = jqXHR.responseJSON.errors;
                var ul = document.createElement("ul");
                ul.style.textAlign = "left";

                for (let x in errors) {
                    var li = document.createElement("li");
                    var text = document.createTextNode(errors[x]);
                    li.appendChild(text);
                    ul.appendChild(li);
                }
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: jqXHR.responseJSON.message,
                    html: ul,
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: jqXHR.responseJSON.message,
                });
            }
        });
    return false;
};

function deleteRecord(
    id,
    formId,
    targetURL,
    reload = true,
    urlToRedirect = null
) {
    Swal.fire({
        title: "Delete!",
        text: "Are you sure you want to delete this record?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, do it!",
    }).then((result) => {
        if (result.isConfirmed) {
            var form = $("#" + formId + "_" + id);
            var data = form.serialize();
            let redirectURL = urlToRedirect ?
                urlToRedirect :
                targetURL.substr(0, targetURL.lastIndexOf("/"));
            $.ajax({
                    type: "POST",
                    url: targetURL,
                    data: data,
                    form: form,
                    dataType: "json",
                })
                .done(function(data) {})
                .fail(function(jqXHR, textStatus, error) {
                    if (jqXHR.status !== 200) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: jqXHR.responseJSON.message,
                        });
                    } else {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Record has been deleted successfully.",
                            icon: "success",
                        }).then((result) => {
                            if (result.isConfirmed) {
                                if (reload == true) {
                                    location.href = redirectURL;
                                } else {
                                    location.reload();
                                }
                            }
                        });
                    }
                });
            return false;
        }
    });
}

function changeStatus(
    id,
    formId,
    targetURL,
    redirectURL = null,
    reload = true
) {
    Swal.fire({
        title: "Update!",
        text: "Are you sure you want to update status of this record?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, do it!",
    }).then((result) => {
        if (result.isConfirmed) {
            var form = $("#" + formId + "_" + id);
            var data = form.serialize();
            var redirectTo = targetURL.substr(
                0,
                targetURL.lastIndexOf("/", targetURL.lastIndexOf("/") - 1)
            );
            $.ajax({
                    type: "POST",
                    url: targetURL,
                    data: data,
                    form: form,
                    dataType: "json",
                })
                .done(function(response) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    $("#loader").css({
                        display: "block"
                    });

                    if (reload) {
                        setTimeout(() => {
                            location.reload();
                        }, 3000);
                    }

                    setTimeout(() => {
                        $("#loader").css({
                            display: "none"
                        });
                    }, 3000);
                })
                .fail(function(jqXHR, textStatus, error) {
                    if (jqXHR.status !== 200) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: jqXHR.responseJSON.message,
                        });
                    } else {
                        Swal.fire({
                            title: "Updated!",
                            text: "Record has been updated successfully.",
                            icon: "success",
                        }).then((result) => {
                            if (result.isConfirmed) {
                                if (redirectURL != null) {
                                    window.location.href = redirectURL;
                                } else {
                                    location.href = redirectTo;
                                }
                            }
                        });
                    }
                });
            return false;
        }
    });
}

const onChangeNationality = (nationality) => {
    if (nationality == "other") {
        $("#nationality_other_container").show();
        $("#nationality_pakistan_container").hide();
    } else {
        $("#nationality_other_container").hide();
        $("#nationality_pakistan_container").show();
    }
};

const loadPopupDialog = (url, dialogId) => {
    $.ajax({
            type: "GET",
            url: url,
            data: {},
        })
        .done(function(response) {
            $("#" + dialogId).modal("show");
            $("#" + dialogId + " .modal-content").html(response.data);
        })
        .fail(function(jqXHR, textStatus, error) {
            console.log(jqXHR);
            if (jqXHR.status !== 200) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: jqXHR.responseJSON.message,
                });
            }
        });
};

const formSubmitWithFiles = (
    formId,
    targetURL,
    fieldToPopulateData,
    reload = false,
    populate = true,
    custom_message = false
) => {
    var data = new FormData(document.getElementById(formId));
    $.ajax({
            type: "POST",
            url: targetURL,
            data: data,
            cache: false,
            contentType: false,
            processData: false,
        })
        .done(function(response) {
            if (populate) {
                $("#" + fieldToPopulateData).empty();
                $("#" + fieldToPopulateData).html(response.data);
            }
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: custom_message ?
                    response.message :
                    "Your work has been saved.!",
                showConfirmButton: false,
                timer: 3000,
            });
            $("#loader").css({
                display: "block"
            });

            if (reload) {
                setTimeout(() => {
                    location.reload();
                }, 3000);
            }

            setTimeout(() => {
                $("#loader").css({
                    display: "none"
                });
            }, 3000);
        })
        .fail(function(jqXHR, textStatus, error) {
            console.log(jqXHR);
            if (jqXHR.responseJSON.errors != null) {
                const errors = jqXHR.responseJSON.errors;
                var ul = document.createElement("ul");
                ul.style.textAlign = "left";

                for (let x in errors) {
                    var li = document.createElement("li");
                    var text = document.createTextNode(errors[x]);
                    li.appendChild(text);
                    ul.appendChild(li);
                }
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: jqXHR.responseJSON.message,
                    html: ul,
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: jqXHR.responseJSON.message,
                });
            }
        });
    return false;
};

// function _preloader(toState) {
//     if (toState == "hide") {
//         $("#cover-spin").css({
//             display: "none",
//         });
//     } else if (toState == "show") {
//         $("#cover-spin").css({
//             display: "block",
//         });
//     }
// }

function updateLike(targetURL, client_profile_id) {
    //_preloader("show");
    $.ajax({
        type: "GET",
        url: targetURL,
        data: {},
    }).done(function(response) {
        obj = JSON.parse(response);
        if (obj.error) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Oops...",
                text: obj.error,
                showConfirmButton: false,
                timer: 2000,
            });
        } else {
            $(".like_count_value_" + client_profile_id + " span").html(
                obj.updated_like_count
            );
            if (obj.total_likes_by_guest >= 5) {
                $("#registerLoginDialog").modal("show");
            } else {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Sweet!",
                    text: "You liked this profile",
                    showConfirmButton: false,
                    timer: 2000,
                });
            }
            //$('.like_button_' + client_profile_id).attr("disabled", "disabled");
            // if (obj.total_likes_by_guest >= 5) {
            //     $("#registerLoginDialog").modal("show");
            // } else {
            //     Swal.fire({
            //         position: "center",
            //         type: "success",
            //         title: "Sweet!",
            //         text: "You liked this profile",
            //         showConfirmButton: false,
            //         timer: 2000,
            //     });
            // }
        }

        //_preloader("hide");
    });
}

const loadSocialLoginPopup = () => {
    $("#profileDetail").modal("toggle");
    $("#unlockProfile")
        .modal({
            backdrop: "static",
            keyboard: false,
        })
        .modal("show");
};

function rishtaFinderUnLockProfile(
    formId,
    targetURL,
    credits,
    reload = true,
    title = "Unlock Profile!"
) {
    Swal.fire({
        title: title,
        text: credits +
            " Credits will be deducted for unlocking this profile. Are you sure you want to unlock this profile?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, do it!",
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                    type: "POST",
                    url: targetURL,
                    data: $("#" + formId).serialize(),
                    form: $("#" + formId),
                    dataType: "json",
                })
                .done(function(response) {
                    Swal.fire({
                        title: "Profile Unlocked Successfully!",
                        text: "This profile has been unlocked successfully.",
                        icon: "success",
                    }).then((result) => {
                        if (result.isConfirmed) {
                            if (reload) {
                                location.reload();
                            }
                        }
                    });
                })
                .fail(function(jqXHR, textStatus, error) {
                    let redirectionRoute = "/rishta-finder/packages";
                    console.log(redirectionRoute);
                    if (jqXHR.status !== 200) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: jqXHR.responseJSON.message,
                            confirmButtonText: "Buy Now",
                            showCancelButton: false,
                        }).then((result) => {
                            if (result.isConfirmed) {
                                window.location.href = redirectionRoute;
                            }
                        });
                    }
                });
            return false;
        }
    });
}