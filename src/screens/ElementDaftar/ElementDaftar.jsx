import React from "react";
import { Logo } from "../../components/Logo";
import "./ElementDaftar.css";

export const ElementDaftar = () => {
  return (
    <div className="element-daftar">
      <div className="frame-wrapper">
        <div className="frame">
          <Logo movieOpen="https://c.animaapp.com/lH1OqOzp/img/movie-open-1.svg" />
          <div className="div">
            <div className="text-wrapper-2">Daftar</div>

            <div className="text-wrapper-3">Selamat datang!</div>
          </div>

          <div className="frame-2">
            <div className="div-wrapper">
              <div className="text-wrapper-4">Username</div>
            </div>

            <div className="frame-3">
              <div className="text-wrapper-5">Masukkan username</div>
            </div>
          </div>

          <div className="password">
            <div className="frame-4">
              <div className="div-wrapper">
                <div className="text-wrapper-4">Kata Sandi</div>
              </div>

              <div className="frame-5">
                <div className="text-wrapper-6">Masukkan kata sandi</div>

                <img
                  className="eye-off"
                  alt="Eye off"
                  src="https://c.animaapp.com/lH1OqOzp/img/eye-off-1.svg"
                />
              </div>
            </div>
          </div>

          <div className="password-2">
            <div className="frame-2">
              <div className="div-wrapper">
                <div className="text-wrapper-4">Kofirmasi Kata Sandi</div>
              </div>

              <div className="frame-5">
                <div className="text-wrapper-6">Masukkan kata sandi</div>

                <img
                  className="eye-off"
                  alt="Eye off"
                  src="https://c.animaapp.com/lH1OqOzp/img/eye-off-1.svg"
                />
              </div>
            </div>

            <div className="frame-6">
              <div className="sudah-punya-akun-wrapper">
                <p className="sudah-punya-akun">
                  <span className="span">Sudah punya akun?</span>

                  <span className="text-wrapper-7">&nbsp;</span>

                  <span className="text-wrapper-8">Masuk</span>
                </p>
              </div>
            </div>
          </div>

          <div className="button">
            <div className="button-sign-in">
              <div className="text-wrapper-9">Daftar</div>
            </div>

            <div className="text-wrapper-10">Atau</div>

            <div className="button-sign-in-2">
              <img
                className="element"
                alt="Element"
                src="https://c.animaapp.com/lH1OqOzp/img/2991148-1@2x.png"
              />

              <div className="text-wrapper-11">Daftar dengan Google</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
